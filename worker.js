if (window.Worker) {
  const myWorker = new Worker("worker.js");
  onmessage = (e) => {
    console.log("Message received from main script");
  };
} else {
  console.log("Your browser doesn't support web workers.");
}
