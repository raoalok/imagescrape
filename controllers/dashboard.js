



/**
 * GET /
 */
exports.dashboardGet = function(req, res) {
            res.render('dashboard', {word: req.params.keyword});
            
              
        };
  