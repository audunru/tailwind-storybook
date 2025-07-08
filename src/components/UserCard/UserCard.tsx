import React from "react";
import Button from "../Button";

interface Props {
  name: string;
  jobTitle: string;
  avatarUrl: string;
  onViewProfile: () => void;
}

const UserCard: React.FC<Props> = ({name,avatarUrl,jobTitle, onViewProfile}) => {
  return (
<div className="max-w-sm bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <img src={avatarUrl} alt={name} className="w-16 h-16 rounded-full" />
      <div className="flex-1">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600">{jobTitle}</p>
      </div>
      <Button
        onClick={onViewProfile}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View Profile
      </Button>
    </div>
  );
};

export default UserCard;
