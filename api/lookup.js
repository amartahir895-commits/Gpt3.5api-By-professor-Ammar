export default async function handler(req, res) {
  const query = req.query.query;

  if (!query) return res.status(400).json({ error: "query is required" });

  try {
    const url = `https://gpt-3-5.apis-bj-devs.workers.dev/?prompt=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({
      success: true,
      query,
      response: data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
