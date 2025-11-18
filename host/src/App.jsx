import React from "react";
import { Suspense, lazy, useState, useEffect } from "react";
import { useGlobalStore } from "./store";

const DashboardApp = lazy(() => import("dashboard/DashboardApp"));
const ProfileApp = lazy(() => import("profile/ProfileApp"));
const SettingsApp = lazy(() => import("settings/SettingsApp"));

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const theme = useGlobalStore((state) => state.theme);
  const username = useGlobalStore((state) => state.username);

  const isDark = theme === "dark";

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) setActiveTab(tab);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", activeTab);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  }, [activeTab]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gray-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
          isDark
            ? "bg-gray-800/80 border-gray-700"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                MF
              </div>
              <div>
                <h1
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Frontend Developer
                </h1>
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {username}
                </p>
              </div>
            </div>
            <div
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full ${
                isDark ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <span
                className="text-xs font-medium"
                style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
              >
                {tabs.find((t) => t.id === activeTab)?.label}
              </span>
            </div>
          </div>
        </div>
      </header>
      <nav
        className={`sticky top-16 z-40 backdrop-blur-md border-b transition-colors ${
          isDark
            ? "bg-gray-800/80 border-gray-700"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? isDark
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                    : isDark
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="transition-all duration-300">
          {activeTab === "dashboard" && (
            <Suspense fallback={<LoadingSpinner />}>
              <DashboardApp />
            </Suspense>
          )}
          {activeTab === "profile" && (
            <Suspense fallback={<LoadingSpinner />}>
              <ProfileApp />
            </Suspense>
          )}
          {activeTab === "settings" && (
            <Suspense fallback={<LoadingSpinner />}>
              <SettingsApp />
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
}
