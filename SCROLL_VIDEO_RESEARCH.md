# Scroll-Driven Video Playback Research

## Best Approach: GSAP ScrollTrigger + Direct `video.currentTime` Scrubbing

### Why This Wins Over The Current Canvas Frame Extraction

| Criteria | Current (Canvas Frames) | GSAP ScrollTrigger |
|---|---|---|
| Loading delay | **~5-15s** (extracts every frame) | **Zero** (video streams naturally) |
| Memory usage | **Hundreds of MB** (all frames in RAM) | **Minimal** (browser manages buffer) |
| Spinner needed | Yes (long extraction) | **No** |
| First frame visible | After first frame extracted | **Instantly** (via `#t=0.001` trick) |
| Smoothness | Excellent (frame-perfect) | Very good (with `scrub` easing) |
| Inertia/easing | Manual (current: `diff * 0.08`) | **Built-in** (`scrub: 0.5`) |
| Both directions | Yes | Yes |
| Code complexity | ~80 lines | ~30 lines |

### Approaches Evaluated

#### 1. ✅ GSAP ScrollTrigger + `video.currentTime` (WINNER)
- GSAP tweens `video.currentTime` from 0 → duration as user scrolls
- `scrub: 0.5` provides built-in smooth easing/inertia (0.5s to catch up)
- GSAP is already installed (`gsap: ^3.14.2`)
- No frame extraction = no loading spinner
- `#t=0.001` media fragment trick forces first frame to render immediately
- Works in both scroll directions natively
- Pin is already handled by CSS `sticky`

#### 2. ❌ requestVideoFrameCallback
- Only fires when video is *playing*, not useful for scroll-driven seeking
- Good for syncing work TO video frames, not for driving playback from scroll
- Would add complexity with no smoothness benefit

#### 3. ❌ Image Sequence
- Best frame accuracy, but requires ffmpeg to extract frames (not available)
- Would need 100-300+ JPEG files, adding significant download overhead
- Impractical for this use case

#### 4. ❌ Direct video.currentTime without GSAP
- Works but requires manual easing/RAF loop (reinventing what GSAP provides)
- No built-in inertia, would need hand-coded lerping (which the current code does)
- More code, more bugs, no benefit over GSAP

### Key Technical Details

**The `#t=0.001` trick**: Adding `#t=0.001` as a media fragment to the video source URL tells the browser to seek to 0.001 seconds immediately, which forces it to decode and display the first frame without autoplaying. This is the standard cross-browser trick (works in Chrome, Safari, Firefox) to show a video poster-like preview without a separate image.

**`scrub` values**:
- `scrub: true` (or `scrub: 0`) = instant, can be jerky
- `scrub: 0.5` = smooth, 0.5s to catch up (recommended for video)  
- `scrub: 1` = smoother but can feel laggy

**Video keyframes matter**: Browser seeking to non-keyframe positions can look choppy. The ideal is to re-encode the MP4 with more keyframes using ffmpeg:
```bash
ffmpeg -i hero-video.mp4 -vcodec libx264 -x264-params keyint=5:scenecut=0 -acodec copy hero-video-scrub.mp4
```
But even without re-encoding, most modern browsers handle `currentTime` seeking well enough for smooth scrolling, especially with GSAP's scrub easing smoothing over the micro-jitters.

### Implementation

The complete implementation is in `Hero.tsx`. Key structure:

```tsx
// 1. Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 2. Video element with #t=0.001 for instant first frame
<video src="/hero-video.mp4#t=0.001" preload="auto" muted playsInline />

// 3. GSAP tween in useEffect
gsap.to(video, {
  currentTime: video.duration,
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "bottom bottom", 
    scrub: 0.5  // smooth easing/inertia
  }
});
```

### Sources
- Muffin Man: https://muffinman.io/blog/scrubbing-videos-using-javascript/
- GSAP Forums: https://gsap.com/community/forums/topic/38762, /44641, /25730
- GSAP ScrollTrigger docs: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- MDN requestVideoFrameCallback: https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback
- iOS Safari #t trick: https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/
