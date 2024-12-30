const simpleChannelMixin = {
  methods: {
    sendMessage(message) {
      console.log(`Sending message: ${message}`);
    },
    receiveMessage(message) {
      console.log(`Received message: ${message}`);
    }
  }
}
