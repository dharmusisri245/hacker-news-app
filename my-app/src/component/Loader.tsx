import {
  Loader2,
} from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <Loader2 className="animate-spin w-8 h-8" />
    </div>
  );
};

export default Loader;