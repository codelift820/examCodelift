# 🚀 Deploy to Vercel - Make /admin-login Work

## Problem
`https://exam-codelift.vercel.app/admin-login` doesn't work because:
1. The `vercel.json` file needs to be deployed
2. Environment variables need to be configured

## Solution (Choose One Method)

### ⚡ Method 1: Vercel CLI (Fastest - 2 minutes)

```bash
# Step 1: Install Vercel CLI
npm i -g vercel

# Step 2: Navigate to project
cd /home/joe/Downloads/PhaseII-exam-main

# Step 3: Login to Vercel
vercel login

# Step 4: Deploy to production
vercel --prod

# Follow the prompts:
# - Link to existing project? Yes
# - Which scope? (select your account)
# - Link to exam-codelift? Yes
```

✅ **Done!** Your `vercel.json` is now deployed.

---

### 📦 Method 2: Git Push

```bash
cd /home/joe/Downloads/PhaseII-exam-main

# Initialize git if needed
git init
git add .
git commit -m "Add vercel.json for SPA routing"

# Add your remote (get URL from GitHub/GitLab)
git remote add origin YOUR_REPO_URL
git push origin main
```

Vercel will auto-deploy from your repository.

---

### 🖱️ Method 3: Drag & Drop Upload

1. Go to https://vercel.com/new
2. Drag and drop the entire `PhaseII-exam-main` folder
3. Wait for deployment
4. Link to existing project when prompted

---

## 🔧 Configure Environment Variables (Required!)

After deployment, set these in Vercel:

1. Go to: https://vercel.com/your-account/exam-codelift/settings/environment-variables

2. Add 3 variables (check all: Production, Preview, Development):

```
VITE_SUPABASE_URL
https://tffurfangafklkufrqrj.supabase.co

VITE_SUPABASE_PUBLISHABLE_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmZnVyZmFuZ2Fma2xrdWZycXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5ODY1NjgsImV4cCI6MjA3ODU2MjU2OH0.FMBItU05RWv2xFCRwjXRDbz9yzpBzoaDlxVEeb3Tqyg

VITE_SUPABASE_PROJECT_ID
tffurfangafklkufrqrj
```

3. Click **Save**

4. Go to **Deployments** tab → Click **Redeploy** button

---

## 🔐 Configure Supabase (Required!)

1. Go to: https://supabase.com/dashboard/project/tffurfangafklkufrqrj/auth/url-configuration

2. Set **Site URL**:
   ```
   https://exam-codelift.vercel.app
   ```

3. Add to **Redirect URLs**:
   ```
   https://exam-codelift.vercel.app/**
   http://localhost:8080/**
   ```

4. Click **Save**

---

## ✅ Test It Works

1. Wait 2-3 minutes for deployment to complete

2. Clear browser cache: `Ctrl + Shift + Delete`

3. Visit: https://exam-codelift.vercel.app/admin-login

4. You should see the admin login page! 🎉

---

## 🔍 Troubleshooting

### Still getting 404?
- Verify `vercel.json` was deployed (check Files tab in Vercel dashboard)
- Try hard refresh: `Ctrl + Shift + R`

### Can't login?
- Check environment variables are set correctly
- Check Supabase redirect URLs are configured
- Open DevTools (F12) → Console tab for errors

### "Invalid API key" error?
- Environment variables not set in Vercel
- Redeploy after adding variables

---

## 📋 Quick Checklist

- [ ] Deploy code with vercel.json (Method 1, 2, or 3)
- [ ] Add 3 environment variables in Vercel
- [ ] Redeploy in Vercel after adding env vars
- [ ] Configure Site URL in Supabase
- [ ] Configure Redirect URLs in Supabase
- [ ] Test: https://exam-codelift.vercel.app/admin-login

---

**Estimated Time:** 5-10 minutes total
