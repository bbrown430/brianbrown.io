"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import confetti from "canvas-confetti";

export function PosterCard() {
  const [posterUrl, setPosterUrl] = useState("");
  const [quality, setQuality] = useState("all");
  const [loading, setLoading] = useState(false);
  
  const triggerConfetti = () => {
    const end = Date.now() + 1 * 150; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },

      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };
  
  const handleUpload = async () => {
    if (!posterUrl) {
      toast("Error", { description: "Please enter a valid URL" });
      return;
    }
    setLoading(true);
    
    try {
      const response = await fetch(`http://localhost:38100/plex/upload/url?url=${encodeURIComponent(posterUrl)}&quality=${quality}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      
      const data = await response.json();
      if (response.ok) {
        const { movies, shows, collections } = data.data.processed;
        const messages = [];
    
        if (movies > 0) messages.push(`Movies: ${movies}`);
        if (shows > 0) messages.push(`Shows: ${shows}`);
        if (collections > 0) messages.push(`Collections: ${collections}`);
    
        if (messages.length > 0) {
            toast("Upload Completed", {
                description: messages.join(", "),
            });
            triggerConfetti();
        }
    
        setPosterUrl("");
      }
      else {
        toast("Error", { description: data.message || "Upload failed" });
      }
    } catch {
      toast("Error", { description: "Failed to connect to server" });
    }
    setLoading(false);
  };
  
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl">Upload Posters</CardTitle>
        <CardDescription>Upload a poster set to your Plex server.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="poster-url">Poster Link</Label>
              <Input
                id="poster-url"
                placeholder="URL"
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
              />
            </div>
            <div className="flex justify-start">
              <div className="flex flex-col space-y-1.5 me-4">
                <Label htmlFor="libraries">Libraries</Label>
                <Select defaultValue="all" value={quality} onValueChange={setQuality}>
                  <SelectTrigger id="libraries">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="hd">HD</SelectItem>
                    <SelectItem value="4k">4K</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          variant="outline"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Upload"}
        </Button>
      </CardFooter>
    </Card>
  );
}