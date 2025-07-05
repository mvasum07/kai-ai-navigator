import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Settings, ExternalLink } from 'lucide-react';

interface WeatherAPIKeyModalProps {
  onApiKeySubmit: (apiKey: string) => void;
  hasApiKey: boolean;
}

const WeatherAPIKeyModal: React.FC<WeatherAPIKeyModalProps> = ({ onApiKeySubmit, hasApiKey }) => {
  const [apiKey, setApiKey] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySubmit(apiKey.trim());
      setApiKey('');
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-white/70 hover:text-white hover:bg-white/10"
          title={hasApiKey ? 'Update Weather API Key' : 'Set Weather API Key'}
        >
          <Settings size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Weather API Configuration</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">WeatherAPI.com API Key</Label>
            <Input
              id="apiKey"
              type="text"
              placeholder="Enter your API key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full"
            />
            <p className="text-sm text-muted-foreground">
              Get your free API key from{' '}
              <a 
                href="https://www.weatherapi.com/signup.aspx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline inline-flex items-center gap-1"
              >
                WeatherAPI.com
                <ExternalLink size={12} />
              </a>
            </p>
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              {hasApiKey ? 'Update' : 'Save'} API Key
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WeatherAPIKeyModal;