# Photo API Notes

## Unsplash — Production Requirements
Status: Applied, pending review

### Checklist for approval:
1. **Hotlink photos** — must link to original Unsplash URL (not rehost)
2. **Trigger downloads** — when a photo is displayed, call the download endpoint
3. **No Unsplash branding** — app must not use Unsplash logo or name
4. **Accurate description** — app name/description must match what we submitted
5. **Attribution required** — show "Photo by [Name] on Unsplash" with links

### What we submitted:
- App name: What's Next Travel
- Description: Travel discovery website displaying city photos in destination guides
- Website: https://whatsnext.vercel.app

### Implementation notes for production:
- Fetch photos at build time, cache URLs in JSON
- Include photographer name + Unsplash link for attribution
- Call `/photos/:id/download` endpoint when displaying (Unsplash requirement)
- Store photo metadata: id, url, photographer, unsplash_link

## Pexels — Instant Access
Status: Using for development/MVP

- Free API key, no review needed
- 200 requests/month free tier
- No attribution required (but appreciated)
- Search endpoint: GET /v1/search?query=Tokyo+travel&per_page=5
- Photos served from Pexels CDN

## Current state
- Using hardcoded Unsplash URLs (some broken)
- Need to migrate to Pexels API for reliable photos
- When Unsplash approves, switch to Unsplash API with proper attribution
