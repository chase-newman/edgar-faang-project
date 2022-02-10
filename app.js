companyArr = ["facebook", "facebook-ticker", 
                "apple", "apple-ticker", "amazon", 
                "amazon-ticker", "netflix","netflix-ticker", 
                "google", "google-ticker"]
                
cikArr = ["0001326801",
          "0000320193",
          "0001018724",
          "0001065280",
          "0001652044"]
          
// ADD LOOP
          
// for(let i=0; i <= cikArr.length; i++) {
//     fetch(`https://data.sec.gov/submissions/CIK${cikArr[i]}.json`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(document.getElementById(companyArr[i]).innerHTML = data.name);
//             console.log(document.getElementById(companyArr[i]).innerHTML = data.tickers[0]);
//     });
// }
// FACEBOOK - META PLATFORMS, INC. - TICKER: FB

fetch(`https://data.sec.gov/submissions/CIK${cikArr[0]}.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
      console.log(document.getElementById(companyArr[0]).innerHTML)
      document.getElementById(companyArr[0]).innerHTML = data.name;
      document.getElementById(companyArr[0 + 1]).innerHTML = data.tickers[0];
    });

// APPLE - TICKER: AAPL

fetch(`https://data.sec.gov/submissions/CIK${cikArr[1]}.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
      console.log(document.getElementById(companyArr[0]).innerHTML)
      document.getElementById(companyArr[1]).innerHTML = data.name;
      document.getElementById(companyArr[1 + 1]).innerHTML = data.tickers[0];
    });
    
// AMAZON - TICKER: AMZN

fetch(`https://data.sec.gov/submissions/CIK${cikArr[2]}.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
      console.log(document.getElementById(companyArr[0]).innerHTML)
      document.getElementById(companyArr[2]).innerHTML = data.name;
      document.getElementById(companyArr[2 + 1]).innerHTML = data.tickers[0];
    })

// NETFLIX - TICKER: NFLX

fetch(`https://data.sec.gov/submissions/CIK${cikArr[3]}.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
      console.log(document.getElementById(companyArr[0]).innerHTML)
      document.getElementById(companyArr[3]).innerHTML = data.name;
      document.getElementById(companyArr[3 + 1]).innerHTML = data.tickers[0];
    })

// GOOGLE - ALPHABET - TICKER: GOOGL, GOOG on NASDAQ

fetch(`https://data.sec.gov/submissions/CIK${cikArr[4]}.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
      console.log(document.getElementById(companyArr[0]).innerHTML)
      document.getElementById(companyArr[4]).innerHTML = data.name;
      document.getElementById(companyArr[4 + 1]).innerHTML = data.tickers[0];
    })
    
    
    