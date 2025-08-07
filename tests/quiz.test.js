const { getVerse } = require('../server/controllers/quizController');

const mockReq = (score) => ({ body: { score } });
const mockRes = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

test('Devuelve versículo correcto para puntuación baja', () => {
  const req = mockReq(15);
  const res = mockRes();
  getVerse(req, res);
  expect(res.json).toHaveBeenCalledWith({
    verse: expect.stringContaining('Mateo 11:28')
  });
});
