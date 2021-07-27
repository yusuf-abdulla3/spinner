const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\|   ', '\r\/   ', '\r\-   ', '\r\\   ', '\r\|   '];

for (let i = 0; i < spinnerArr.length; i++) {
  setTimeout(() => process.stdout.write(spinnerArr[i]), 100 + i*200)
}