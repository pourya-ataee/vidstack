import ReactDOM from "react-dom/client";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { DefaultVideoLayout, defaultLayoutIcons } from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

function customVidstack(elementId: string, videoConfigs: any) {
	const CustomVidstackComponent = () => (
		<MediaPlayer {...videoConfigs}>
			<MediaProvider>
				<DefaultVideoLayout thumbnails={videoConfigs.thumbnails || "https://files.vidstack.io/sprite-fight/thumbnails.vtt"} icons={defaultLayoutIcons} />
			</MediaProvider>
		</MediaPlayer>
	);

	const mountNode = document.getElementById(elementId);
	if (!mountNode) {
		console.error(`Element with id "${elementId}" not found.`);
		return;
	}

	const root = ReactDOM.createRoot(mountNode);
	root.render(<CustomVidstackComponent />);
}

export default customVidstack;
