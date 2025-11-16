import React from "react";
import { useGlobalStore } from "host/Store";
import "./index.css";

export default function SettingsApp() {
  const theme = useGlobalStore((state) => state.theme);
  const setTheme = useGlobalStore((state) => state.setTheme);
  const isDark = theme === "dark";

  const themes = [
    {
      id: "light",
      name: "Light",
      icon: "☀️",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      id: "dark",
      name: "Dark",
      icon: "🌙",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      id: "auto",
      name: "Auto",
      icon: "🔄",
      gradient: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <div className="space-y-6">
      <div
        className={`rounded-2xl p-8 ${
          isDark
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
            : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl"
        }`}
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl shadow-2xl">
            ⚙️
          </div>
          <div>
            <h2
              className={`text-3xl font-bold mb-1 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Settings
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Customize your experience
            </p>
          </div>
        </div>
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
          🎨 Appearance
        </h3>
        <p
          className={`text-sm mb-6 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Choose how the app looks to you
        </p>
        <div className="grid grid-cols-3 gap-4">
          {themes.map((themeOption) => (
            <button
              key={themeOption.id}
              onClick={() => setTheme(themeOption.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                theme === themeOption.id
                  ? "border-blue-500 shadow-lg shadow-blue-500/30"
                  : isDark
                  ? "border-gray-700 hover:border-gray-600"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${themeOption.gradient} flex items-center justify-center text-3xl shadow-lg`}
              >
                {themeOption.icon}
              </div>
              <p
                className={`font-semibold text-center ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {themeOption.name}
              </p>
              {theme === themeOption.id && (
                <p className="text-xs text-blue-500 text-center mt-2 font-medium">
                  ✓ Active
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
