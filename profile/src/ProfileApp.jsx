import React, { useState } from "react";
import { useGlobalStore } from "host/Store";
import "./index.css";

export default function ProfileApp() {
  const username = useGlobalStore((state) => state.username);
  const setUsername = useGlobalStore((state) => state.setUsername);
  const theme = useGlobalStore((state) => state.theme);
  const isDark = theme === "dark";
  const [isEditing, setIsEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);

  const handleSave = () => {
    setUsername(tempUsername);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempUsername(username);
    setIsEditing(false);
  };

  const profileInfo = [
    { label: "Email", value: "javidangrbnl@gmail.com", icon: "📧" },
    { label: "Role", value: "Frontend Developer", icon: "💼" },
    { label: "Location", value: "Baku, Azerbaijan", icon: "📍" },
    { label: "Joined", value: "January 2025", icon: "📅" },
  ];

  const achievements = [
    {
      title: "Early Adopter",
      description: "Joined in the first month",
      icon: "🌟",
      color: "yellow",
    },
    {
      title: "Team Player",
      description: "Collaborated on 50+ projects",
      icon: "🤝",
      color: "blue",
    },
    {
      title: "Code Master",
      description: "1000+ commits",
      icon: "💻",
      color: "purple",
    },
    {
      title: "Bug Hunter",
      description: "Fixed 100+ bugs",
      icon: "🐛",
      color: "green",
    },
  ];

  const getAchievementColor = (color) => {
    const colors = {
      yellow: isDark
        ? "from-yellow-500 to-orange-500"
        : "from-yellow-400 to-orange-400",
      blue: isDark ? "from-blue-500 to-cyan-500" : "from-blue-400 to-cyan-400",
      purple: isDark
        ? "from-purple-500 to-pink-500"
        : "from-purple-400 to-pink-400",
      green: isDark
        ? "from-green-500 to-emerald-500"
        : "from-green-400 to-emerald-400",
    };
    return colors[color];
  };

  return (
    <div className="space-y-6">
      <div
        className={`rounded-2xl p-8 ${
          isDark
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
            : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              {username.charAt(0).toUpperCase()}
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          <div className="flex-1 text-left">
            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={tempUsername}
                  onChange={(e) => setTempUsername(e.target.value)}
                  className={`text-3xl font-bold px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
                <div className="flex space-x-3">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      isDark
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2
                  className={`text-4xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {username}
                </h2>
                <p
                  className={`text-lg mb-4 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Frontend Developer at AFEA Group
                </p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileInfo.map((info, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200 shadow-lg"
            }`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg`}
              >
                {info.icon}
              </div>
              <div>
                <p
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {info.label}
                </p>
                <p
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {info.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`rounded-xl p-6 ${
          isDark
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200 shadow-lg"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          🏆 Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-5 rounded-lg transition-all duration-300 hover:scale-105 ${
                isDark ? "bg-gray-700/50" : "bg-gray-50"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${getAchievementColor(
                    achievement.color
                  )} flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}
                >
                  {achievement.icon}
                </div>
                <div>
                  <h4
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {achievement.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
