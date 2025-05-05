const db = require('../db/mysql');

function generateUserId() {
  return 'USER_' + Math.floor(100000 + Math.random() * 900000);
}

// creates a new listing
exports.createListing = async (req, res) => {
  const { title, description, rent, address, rooms, contact } = req.body;

  
  if (!title || !description || !rent || !address || !rooms || !contact) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const userId = generateUserId();

    const [result] = await db.execute(
      `INSERT INTO listings (userId, title, description, rent, address, rooms, contact)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [userId, title, description, rent, address, rooms, contact]
    );

    res.status(201).json({ id: result.insertId, userId, message: 'Listing created.' });
  } catch (err) {
    console.error('Error creating listing:', err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};



// get listing details by userId
exports.getListingsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const [rows] = await db.execute(
      'SELECT * FROM listings WHERE userId = ? ORDER BY created_at DESC',
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'No listings found for this user.' });
    }

    res.status(200).json(rows);
  } catch (err) {
    console.error('Error fetching user listings:', err);
    res.status(500).json({ message: 'Failed to fetch user listings.' });
  }
};
