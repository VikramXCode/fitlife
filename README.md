# Fitlife - Fitness Gym Website

A modern, responsive fitness gym website with video backgrounds, class booking system, and contact forms. Built with HTML, CSS, and vanilla JavaScript.

## Features

- 🎬 **Responsive Video Player** - Portrait video for mobile, landscape for desktop
- 📝 **Class Booking System** - Book classes via form, call, or WhatsApp
- 💾 **Local Storage** - All bookings and inquiries saved in browser localStorage
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Clean design with smooth animations
- 📧 **Contact Form** - Get in touch section with multiple contact options

## Project Structure

```
fitlife-master/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # All styles
│   ├── js/
│   │   └── script.js      # All JavaScript functionality
│   ├── images/            # All image assets
│   ├── video landscape.mp4   # Desktop video
│   └── video portrait.mp4    # Mobile video
├── vercel.json            # Vercel configuration
└── README.md              # This file
```

## Prerequisites

Before deploying, ensure you have:

- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free tier is sufficient)
- Git installed on your computer (optional, for CLI deployment)

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)

#### Step 1: Prepare Your Project

1. Make sure all your files are in the project folder
2. Verify the following files exist:
   - `index.html`
   - `vercel.json`
   - `assets/` folder with all subfolders

#### Step 2: Push to GitHub

1. Go to [GitHub](https://github.com) and create a new repository
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it (e.g., "fitlife-website")
   - Choose "Public" or "Private"
   - DO NOT initialize with README (you already have one)
   - Click "Create repository"

2. Open PowerShell in your project folder and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace YOUR_REPO with your repository name)
git remote add origin https://github.com/VikramXCode/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_REPO` with your repository name (e.g., "fitlife-website").

#### Step 3: Deploy on Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub" (recommended)
4. Click "Add New..." → "Project"
5. Click "Import" next to your GitHub repository
6. Configure your project:
   - **Project Name:** Choose a name (e.g., fitlife-gym)
   - **Framework Preset:** Leave as "Other"
   - **Root Directory:** Leave as `./`
   - **Build Command:** Leave empty
   - **Output Directory:** Leave empty
7. Click "Deploy"
8. Wait 1-2 minutes for deployment to complete
9. Click "Visit" to see your live website! 🎉

Your website will be live at: `https://your-project-name.vercel.app`

---

### Method 2: Deploy via Vercel CLI (Advanced)

#### Step 1: Install Vercel CLI

Open PowerShell and run:

```powershell
npm install -g vercel
```

#### Step 2: Login to Vercel

```powershell
vercel login
```

Follow the prompts to authenticate.

#### Step 3: Deploy

Navigate to your project folder and run:

```powershell
# Change to your project directory
cd "C:\Users\dines\Downloads\fitlife-master\fitlife-master"

# Deploy to Vercel
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → fitlife-gym (or your choice)
- **Directory?** → Press Enter (current directory)

For production deployment:

```powershell
vercel --prod
```

Your website will be deployed and you'll get a URL like: `https://fitlife-gym.vercel.app`

---

## Custom Domain (Optional)

To use your own domain:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

---

## Environment Setup

Since this is a static website using localStorage for data persistence, no environment variables are needed. All data is stored in the user's browser.

---

## Local Development

To run the website locally:

1. Simply open `index.html` in your web browser, or
2. Use a local server (recommended for testing):

**Using Python:**
```powershell
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Using Node.js (npx):**
```powershell
npx http-server

# Then visit: http://localhost:8080
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

---

## Accessing Stored Data

All bookings and contact form submissions are stored in the browser's localStorage. To view them:

1. Open your website
2. Press `F12` to open Developer Tools
3. Go to "Application" tab (Chrome) or "Storage" tab (Firefox)
4. Click "Local Storage" → Your domain
5. Look for these keys:
   - `fitlife_bookings` - All class bookings
   - `fitlife_inquiries` - All contact form submissions

---

## Updating Your Website

### After deployment, to update your website:

**Via GitHub + Vercel (Automatic):**
1. Make changes to your local files
2. Commit and push to GitHub:
   ```powershell
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Vercel will automatically redeploy (takes 1-2 minutes)

**Via Vercel CLI:**
```powershell
vercel --prod
```

---

## Troubleshooting

### Issue: Videos not loading
**Solution:** Ensure video files are in the `assets/` folder and paths are correct in `index.html`.

### Issue: Forms not saving data
**Solution:** Check browser console (F12) for errors. Ensure JavaScript is enabled.

### Issue: Page not found (404)
**Solution:** Verify `vercel.json` exists in the root directory.

### Issue: Deployment failed
**Solution:** 
- Check that `index.html` is in the root directory
- Ensure all file paths use forward slashes (`/`)
- Verify no special characters in file names

### Issue: Videos have spaces in filenames
**Solution:** Files with spaces should use URL encoding (`%20`) in HTML, which is already done.

---

## Features Breakdown

### 1. Class Booking System
- Users can book classes via inline form
- Auto-selects class when clicking on class cards
- Saves to localStorage
- Sends WhatsApp message with booking details
- Toast notifications for confirmation

### 2. Contact Form
- Saves inquiries to localStorage
- Fully validated form fields
- Responsive layout

### 3. Responsive Video Player
- Shows portrait video on mobile (< 768px)
- Shows landscape video on tablet/desktop (≥ 768px)
- No audio, no visible controls
- Play/pause with custom button

### 4. Navigation
- Smooth scroll to sections
- Mobile hamburger menu
- Active section highlighting

---

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

---

## Performance

The website is optimized for performance:
- Lazy loading for images
- Compressed assets
- Minimal JavaScript
- CSS animations instead of JavaScript where possible

---

## Support

For issues or questions about this website, contact:
- **Phone:** 6384973278
- **WhatsApp:** https://wa.me/916384973278
- **Email:** vikramrazz3278@gmail.com
- **GitHub:** https://github.com/VikramXCode

---

## Quick Reference Card

### 📌 Deployment Checklist
- [ ] Project pushed to GitHub
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Deployment successful
- [ ] Website tested on mobile and desktop
- [ ] Custom domain configured (optional)

### 📌 Important URLs
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub:** https://github.com
- **Vercel Documentation:** https://vercel.com/docs

---

Made with ❤️ for Fitlife Gym