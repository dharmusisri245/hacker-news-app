import {
  Card,
  CardContent,
} from "../components/ui/card";

const StorySkeleton = () => {
  return (
    <Card>
      <CardContent className="p-5 space-y-4 animate-pulse">

        {/* Title */}
        <div className="h-6 bg-gray-200 rounded w-3/4" />

        {/* Meta Info */}
        <div className="flex gap-4">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>

        {/* Button */}
        <div className="h-10 w-32 bg-gray-200 rounded" />

      </CardContent>
    </Card>
  );
};

export default StorySkeleton;