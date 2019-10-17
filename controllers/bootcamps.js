exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'get all bootcamps' });
};

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `get single bootcamp ${req.params.id}` });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
