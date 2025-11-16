import React from "react";
import { useGlobalStore } from "host/Store";
import "./index.css";

export default function DashboardApp() {
  const username = useGlobalStore((state) => state.username);
  const theme = useGlobalStore((state) => state.theme);
  const isDark = theme === "dark";

  const stats = [
    {
      label: "Total Projects",
      value: "24",
      change: "+12%",
      icon: "📁",
      color: "blue",
    },
    {
      label: "Active Tasks",
      value: "18",
      change: "+5%",
      icon: "✓",
      color: "green",
    },
    {
      label: "Team Members",
      value: "12",
      change: "+2",
      icon: "👥",
      color: "purple",
    },
    {
      label: "Completed",
      value: "156",
      change: "+23%",
      icon: "🎯",
      color: "orange",
    },
  ];

  const recentActivity = [
    { action: "Deployed new feature", time: "2 hours ago", status: "success" },
    { action: "Code review completed", time: "4 hours ago", status: "success" },
    { action: "Sprint planning meeting", time: "Yesterday", status: "pending" },
    { action: "Bug fix merged", time: "2 days ago", status: "success" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: isDark ? "from-blue-500 to-blue-600" : "from-blue-400 to-blue-500",
      green: isDark
        ? "from-green-500 to-green-600"
        : "from-green-400 to-green-500",
      purple: isDark
        ? "from-purple-500 to-purple-600"
        : "from-purple-400 to-purple-500",
      orange: isDark
        ? "from-orange-500 to-orange-600"
        : "from-orange-400 to-orange-500",
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
        <div className="flex items-center justify-between">
          <div>
            <h2
              className={`text-3xl font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Welcome back, {username}! 👋
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Here's what's happening with your projects today.
            </p>
          </div>
          <div
            className={`hidden md:block text-6xl ${
              isDark ? "opacity-50" : "opacity-30"
            }`}
          >
            📊
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200 shadow-lg"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(
                  stat.color
                )} flex items-center justify-center text-2xl shadow-lg`}
              >
                {stat.icon}
              </div>
              <span
                className={`text-sm font-semibold px-2 py-1 rounded-full ${
                  stat.change.startsWith("+")
                    ? isDark
                      ? "bg-green-900/30 text-green-400"
                      : "bg-green-100 text-green-700"
                    : isDark
                    ? "bg-red-900/30 text-red-400"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3
              className={`text-3xl font-bold mb-1 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {stat.value}
            </h3>
            <p
              className={`text-sm font-medium ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {stat.label}
            </p>
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
          className={`text-xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.status === "success"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                ></div>
                <div>
                  <p
                    className={`font-medium ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {activity.action}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {activity.time}
                  </p>
                </div>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  activity.status === "success"
                    ? isDark
                      ? "bg-green-900/30 text-green-400"
                      : "bg-green-100 text-green-700"
                    : isDark
                    ? "bg-yellow-900/30 text-yellow-400"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
