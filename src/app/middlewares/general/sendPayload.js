//send payload
function sendPayload(req, res) {
  return res.send(req.payload);
}

export default sendPayload;
