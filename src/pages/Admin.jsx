import { useState, useEffect } from "react";
import { Mail, Eye, Trash2, CheckCircle, Clock, Archive } from "lucide-react";

export const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetchMessages();
    fetchStats();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contact?limit=50');
      const data = await response.json();
      if (data.success) {
        setMessages(data.data);
      }
    } catch (error) {
      setError('Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contact/stats');
      const data = await response.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const updateMessageStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/contact/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (response.ok) {
        fetchMessages(); // Refresh the list
        fetchStats(); // Refresh stats
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    
    try {
      const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        fetchMessages(); // Refresh the list
        fetchStats(); // Refresh stats
      }
    } catch (error) {
      console.error('Failed to delete message:', error);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'unread':
        return <Clock size={16} className="text-yellow-500" />;
      case 'read':
        return <Eye size={16} className="text-blue-500" />;
      case 'replied':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'archived':
        return <Archive size={16} className="text-gray-500" />;
      default:
        return <Mail size={16} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unread':
        return 'bg-yellow-100 text-yellow-800';
      case 'read':
        return 'bg-blue-100 text-blue-800';
      case 'replied':
        return 'bg-green-100 text-green-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={fetchMessages}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Messages Dashboard</h1>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Total Messages</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.total || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Unread</h3>
            <p className="text-3xl font-bold text-yellow-600">{stats.unread || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Replied</h3>
            <p className="text-3xl font-bold text-green-600">{stats.byStatus?.replied || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Spam</h3>
            <p className="text-3xl font-bold text-red-600">{stats.spam || 0}</p>
          </div>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Messages</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {messages.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <Mail size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">No messages yet</p>
              </div>
            ) : (
              messages.map((message) => (
                <div key={message._id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{message.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                          {getStatusIcon(message.status)} {message.status}
                        </span>
                        {message.isSpam && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            SPAM
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{message.email}</p>
                      <p className="text-gray-700 mb-3 line-clamp-2">{message.message}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{new Date(message.createdAt).toLocaleDateString()}</span>
                        <span>{new Date(message.createdAt).toLocaleTimeString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => setSelectedMessage(message)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                        title="View full message"
                      >
                        <Eye size={16} />
                      </button>
                      
                      <select
                        value={message.status}
                        onChange={(e) => updateMessageStatus(message._id, e.target.value)}
                        className="text-sm border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="unread">Unread</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                        <option value="archived">Archived</option>
                      </select>
                      
                      <button
                        onClick={() => deleteMessage(message._id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                        title="Delete message"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Message from {selectedMessage.name}</h3>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-gray-900">{selectedMessage.email}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <p className="mt-1 text-gray-900">
                    {new Date(selectedMessage.createdAt).toLocaleString()}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
                
                {selectedMessage.ipAddress && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">IP Address</label>
                    <p className="mt-1 text-gray-900">{selectedMessage.ipAddress}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 