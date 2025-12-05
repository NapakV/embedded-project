'use client'
import { MicIcon } from "./icons/MicIcon";
import { useState, useEffect, useRef } from "react";
import sendAudioFile from "@/app/api/sendAudioFile";

export const Mic = () => {
    const [canRecord, setCanRecord] = useState(true);
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const streamRef = useRef<MediaStream | null>(null);
    const recorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    
    // Request microphone access and prepare MediaRecorder
    useEffect(() => {
        let mounted = true;
        async function init() {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                setCanRecord(false);
                return;
            }

            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                if (!mounted) return;
                streamRef.current = stream;

                const recorder = new MediaRecorder(stream);
                recorder.ondataavailable = (e: BlobEvent) => {
                    if (e.data && e.data.size > 0) {
                        chunksRef.current.push(e.data);
                    }
                };

                recorder.onstop = () => {
                    const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
                    chunksRef.current = [];
                    const url = URL.createObjectURL(audioBlob);
                    setAudioUrl(url);
                    console.log(sendAudioFile(audioBlob));

                };

                recorderRef.current = recorder;
                
                setCanRecord(true);
            } catch (err) {
                console.error("Error accessing microphone:", err);
                setCanRecord(false);
            }
        }

        init();

        return () => {
            mounted = false;
            // cleanup: stop recorder and tracks
            if (recorderRef.current && recorderRef.current.state !== "inactive") {
                try {
                    recorderRef.current.stop();
                } catch {}
            }
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((t) => t.stop());
                streamRef.current = null;
            }
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
        };
    }, []);

    const handleClick = () => {
        if (!canRecord) return;

        const recorder = recorderRef.current;
        if (!recorder) return;
        if (!isRecording) {
            // start recording
            chunksRef.current = [];
            try {
                recorder.start();
                setIsRecording(true);
            } catch (err) {
                console.error("Failed to start recorder", err);
            }
        } else {
            // stop recording
            try {
                recorder.stop();
            } catch (err) {
                console.error("Failed to stop recorder", err);
            }
            setIsRecording(false);
            
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <button
                className={`bg-primary-200 h-[70px] w-[70px] relative text-primary-800 py-2 px-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center
                        ${isRecording ? "animate-bounce" : ""}`}
                onClick={handleClick}
            >
                <div className="flex items-center absolute justify-center">
                    <MicIcon />
                </div>
            </button>

            {isRecording ? (
                <div className="text-sm text-primary-200">Listening...</div>
            ) : (
                <div className="text-sm text-primary-200">Tap to speak</div>
            )}

            {audioUrl && (
                <audio className="mt-2" controls src={audioUrl} />
            )}
        </div>
    );
};