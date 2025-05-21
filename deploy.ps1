# Build the project
npm run build

# Navigate to the build directory
cd dist

# Create .nojekyll file to bypass Jekyll processing
New-Item -Path ".nojekyll" -ItemType "file" -Force

# Initialize git repo
git init
git checkout -b main
git add -A
git commit -m "deploy"

# Push to GitHub Pages
git push -f git@github.com:yuan25j/portfolio.git main:gh-pages

# Return to the project root
cd .. 