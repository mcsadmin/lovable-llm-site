import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface VideoDialogProps {
  videoSrc: string;
  children?: React.ReactNode;
}

export const VideoDialog = ({ videoSrc, children }: VideoDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="hero-outline" size="xl">
            <Play className="h-5 w-5 mr-2" />
            Watch Video
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl p-0 bg-black border-none overflow-hidden">
        {open && (
          <video
            controls
            autoPlay
            className="w-full aspect-video"
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </DialogContent>
    </Dialog>
  );
};
