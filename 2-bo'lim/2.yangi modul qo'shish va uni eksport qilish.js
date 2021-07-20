
function log(message) {
    // to-do: bu yerda message'ni url'ga http post qilib jo'natish kode bo'lishi kerak
    console.log(message);
}

// module.exports.log = log;
// Agar export qiladigan narsalar bita bo'lsa shu yo'l bilan export qilsa bo'ladi
module.exports = log;