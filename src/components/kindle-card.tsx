import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
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

export function KindleCard() {
  interface Book {
    title: string;
    author: string;
    image: string;
    size: string;
    language: string;
    genre: string;
    attachment_name: string;
    filepath: string;
    md5: string;
    display_string: string | null;
  }

  const [disableTryAgain, setDisableTryAgain] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recipient, setRecipient] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);
  const [linkStatus, setLinkStatus] = useState<"checking" | "valid" | "invalid">("checking");

  const BASE_URL = "http://localhost:38100/kindle";

  useEffect(() => {
    const checkLink = async () => {
      const url = "https://download.books.ms/fiction/2993000/bd37ff3c4a77c33f6c7e2512b51c54e4.epub/Sally%20Rooney%20-%20Intermezzo.epub";
  
      try {
        const response = await fetch(`${BASE_URL}/check-url?url=${encodeURIComponent(url)}`);
        const data = await response.json();
  
        if (response.ok && data.available) {
          setLinkStatus("valid");
        } else {
          setLinkStatus("invalid");
        }
      } catch (err) {
        console.error("Status check error:", err);
        setLinkStatus("invalid");
      }
    };
  
    checkLink();
  }, []);
  

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

    const searchBooks = async () => {
      setLoading(true);
      setDisableTryAgain(false);
      try {
        const response = await fetch(`${BASE_URL}/search`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: searchTerm }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          setBook(data.book);
          setSessionId(data.session_id);
          setDialogOpen(true);
        } else {
          toast("No books found!", {
            description: "Try again with a different search.",
          });
        }
      } catch (err) {
        console.error("Network error:", err);
        toast("No books found!", {
          description: "Try again with a different search.",
        });
      } finally {
        setLoading(false);
      }
    };
    

    const handleSend = async () => {
      if (!sessionId || !recipient) return;
    
      setSendLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/download/${sessionId}?user=${recipient}`);
        const data = await response.json();
    
        if (response.ok) {
          toast("Book sent!", {
            description: `${data.title} sent to ${data.user.charAt(0).toUpperCase() + data.user.slice(1)}'s Kindle.`,
          });
          triggerConfetti();
          setDialogOpen(false);
          setSearchTerm("");
        } else {
          console.error("Download failed:", data);
          toast("Download failed!", {
          });
          setDialogOpen(false);
        }
      } catch (err) {
        console.error("Send error:", err);
        toast("Download failed!");
        setDialogOpen(false);
      } finally {
        setSendLoading(false);
      }
    };
    
  
    const getNextBook = async () => {
      if (!sessionId) return;
      setLoading(true); // Add this line
      try {
        const response = await fetch(`${BASE_URL}/next/${sessionId}`);
        const data = await response.json();
        if (response.ok) {
          setBook(data.book);
          setDisableTryAgain(false);
        } else {
          console.error("Next failed:", data);
          setDisableTryAgain(true);
        }
      } catch (err) {
        console.error("Next error:", err);
        setDisableTryAgain(true);
      } finally {
        setLoading(false); // Add this too
      }
    };
    
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl">Send Book</CardTitle>
        <CardDescription>Search for a book to send to your Kindle.</CardDescription>
      </CardHeader>
      <CardContent>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!recipient) {
            toast("Please select a recipient.");
            return;
          }

          if (!searchTerm.trim()) {
            toast("Please enter a search term.");
            return;
          }

          searchBooks();
        }}
      >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="term">Search Term</Label>
              <Input
                id="term"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex justify-start">
              <div className="flex flex-col space-y-1.5 me-4">
                <Label htmlFor="recipient">Recipient</Label>
                <Select onValueChange={setRecipient}>
                  <SelectTrigger id="recipient">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="brian">Brian</SelectItem>
                    <SelectItem value="zoe">Zoe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
        </form>
      </CardContent>
        <CardFooter className="flex justify-between">
        <div className="text-zinc-500 text-sm font-bold">Status: 
        <span className={
          linkStatus === "valid"
            ? "text-green-400 text-sm"
            : linkStatus === "invalid"
            ? "text-red-400 text-sm"
            : "text-zinc-400 text-sm"
        }>
          {linkStatus === "checking"
            ? " Checking..."
            : linkStatus === "valid"
            ? " Online"
            : " Offline"}
        </span>
        </div>
        <Button
          type="submit"
          variant="outline"
          disabled={loading || !recipient || !searchTerm.trim()}
          onClick={() => {
            if (!recipient) {
              toast("Please select a recipient.");
              return;
            }

            if (!searchTerm.trim()) {
              toast("Please enter a search term.");
              return;
            }

            searchBooks();
          }}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin me-2 h-4 w-4" />
              Searching...
            </>
          ) : (
            "Search"
          )}
        </Button>
        <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl text-start">Book found!</AlertDialogTitle>
              <div className="flex items-center">
                {loading || !book ? (
                  <>
                    <Skeleton className="h-44 w-30 rounded me-6" />
                    <div className="me-6 space-y-2">
                      <Skeleton className="h-6 w-64 rounded" />
                      <Skeleton className="h-5 w-40 rounded" />
                      <Skeleton className="h-4 w-48 rounded" />
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={book.image}
                      className="h-44 w-30 rounded me-6"
                      alt="Book cover"
                    />
                    <div className="me-6">
                      <h2 className="text-xl text-start font-bold text-zinc-200 mb-1">
                        {book.title}
                      </h2>
                      <h3 className="text-md text-start font-normal text-zinc-400">
                        {book.author}
                      </h3>
                      <p className="text-sm text-start text-zinc-500 mt-2">
                        {book.genre} - {book.language} - {book.size}
                      </p>
                    </div>
                  </>
                )}
              </div>

            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setDialogOpen(false)}>
                Cancel
              </AlertDialogCancel>

              <Button
                variant="secondary"
                onClick={getNextBook}
                disabled={disableTryAgain || loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin me-2 h-4 w-4" />
                    Searching
                  </>
                ) : disableTryAgain ? (
                  "Finished"
                ) : (
                  "Try Again"
                )}
              </Button>


              {sendLoading ? (
                <Button disabled>
                  <Loader2 className="animate-spin me-2 h-4 w-4" />
                  Downloading
                </Button>
              ) : (
                <Button onClick={handleSend}>
                  Send
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
