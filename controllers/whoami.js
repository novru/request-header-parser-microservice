const whoami = (req, res) => {
	res.status(200).json({
		ipaddress: req.socket.remoteAddress,
		language: req.headers["accept-language"],
		software: req.headers["user-agent"],
	});
};

module.exports = {
	whoami,
};
