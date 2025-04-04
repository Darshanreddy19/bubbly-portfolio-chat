
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            className={cn(
              "h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 p-3 shadow-lg",
              "hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            )}
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle size={28} className="text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] p-0 rounded-lg h-[500px] sm:h-[600px] md:h-[700px]">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold">Chat with me</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="hover:bg-slate-100 rounded-full h-8 w-8"
              >
                <X size={18} />
              </Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/y3TJBlpU4MgSaJLiDOT33"
                width="100%"
                style={{ height: '100%' }}
                frameBorder="0"
                title="Chatbot"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatBubble;
