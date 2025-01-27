// const authorizeRole = (role) => {
//     return (req, res, next) => {
//         if (req.user.role !== role) {
//             return res.status(403).json({ message: 'Access Denied: Insufficient Permissions' });
//         }
//         next();
//     };
// };
const authorizeRole = (requiredRole) => (req, res, next) => {
    const user = req.user; // Set in authenticateToken middleware

    if (!user || user.role !== requiredRole) {
        return res.status(403).json({ message: 'Access Denied: Insufficient Permissions' });
    }
    next();
};


module.exports = authorizeRole;
