const startServer = (myApp) => {
  const port = process.env.PORT || 5000;
  myApp.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

export default startServer;
