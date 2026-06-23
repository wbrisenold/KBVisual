import { ExternalLink } from "lucide-react";

const PortfolioButtons = () => {
  const lightoomShareId = "0e2148abff7c44a0893d09b635f29a29";
  const youtubePlaylistId = "PLyour-playlist-id-here";

  return (
    <div className="space-y-8">
      {/* Gallery Button Section */}
      <div className="text-center">
        <div className="editorial-body text-stone-400 mb-6">
          For the best viewing experience, click the link below to open the full gallery in a new window
        </div>
        <button 
          onClick={() => window.open(`https://lightroom.adobe.com/shares/${lightoomShareId}`, '_blank')}
          className="bg-yellow-600 text-stone-900 px-8 py-3 rounded-lg font-semibold text-sm hover:bg-yellow-700 transition-colors inline-flex items-center"
          style={{
            minWidth: '200px',
            height: '48px',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          VIEW FULL GALLERY
        </button>
      </div>

      {/* YouTube Button Section */}
      <div className="text-center">
        <div className="editorial-body text-stone-400 mb-6">
          Watch the complete video collection on YouTube for the full cinematic experience
        </div>
        <button 
          onClick={() => window.open(`https://youtube.com/playlist?list=${youtubePlaylistId}`, '_blank')}
          className="bg-yellow-600 text-stone-900 px-8 py-3 rounded-lg font-semibold text-sm hover:bg-yellow-700 transition-colors inline-flex items-center"
          style={{
            minWidth: '200px',
            height: '48px',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          VIEW ON YOUTUBE
        </button>
      </div>
    </div>
  );
};

export default PortfolioButtons;