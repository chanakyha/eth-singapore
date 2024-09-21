import React from "react";

interface Channel {
  id: string;
  name: string;
}

interface SidebarProps {
  channels: Channel[];
  selectedChannel: Channel;
  setSelectedChannel: (channel: Channel) => void;
}

const Sidebar = ({ channels, selectedChannel, setSelectedChannel }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 text-lg font-bold">Channels</div>

      {/* Channel List */}
      <div className="flex-1 overflow-y-auto">
        {channels.map((channel) => (
          <div
            key={channel.id}
            onClick={() => setSelectedChannel(channel)}
            className={`p-4 cursor-pointer hover:bg-gray-700 ${
              selectedChannel.id === channel.id ? "bg-gray-700" : ""
            }`}
          >
            {channel.name}
          </div>
        ))}
      </div>

      {/* Create Channel/Space */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full p-2 bg-emerald-500 rounded-lg hover:bg-emerald-600">
          + Create Channel
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
