Remove-Item -r build
Set-Location ../full-stack-open/part2/phonebook
npm run build --prod
Copy-Item -r build ../../../full-stack-backend/
Set-Location ../../../full-stack-backend