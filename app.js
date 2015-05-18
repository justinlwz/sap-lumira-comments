// Hello, welcome to your new Framer project. This is where you should 
// start coding. Feel free to remove all of this code.
// 
// Just to rehash: Framer just converted all your layer groups into framer
// views. Just drop index.html (next to this file) on your browser to see
// the result. Every view is available under the global PSD object, so if you
// had a layer group called MyPhoto you can find it under PSD["MyPhoto"].
// 
// You can safely re-run the Framer app any time and this code will stay 
// intact. Framer will only update the graphics.
// 
// Some links that could come in handy:
// 
// 	- Docs: 	http://www.framer.com/documentation
// 	- Examples: http://www.framer.com/examples


// ==============================================================
// 

// Set up clipping for Canvas
PSD.VizRoom.width = 1280;
PSD.VizRoom.height = 768;
PSD.VizRoom.x = 0;
PSD.VizRoom.y = 0;
PSD.VizRoom.clip = true;
animationCurve = "spring(400,30,200)";

// Set up Buttons
PSD.PresentBtn.opacity = 0;
PSD.CollaborateBtn.opacity = 0;
PSD.HideRPanelBtn.opacity = 0;
PSD.ThreadPostDelBtn.opacity = 0;

// Set up Right Panel
PSD.CommentTabCurrent.opacity = 0;
PSD.CommentTabCurrent.index = 2;

PSD.RecentComments.superView = PSD.RightPanel;
PSD.RecentComments.x = PSD.RightPanel.width + 10;
PSD.RecentComments.y = PSD.RelatedViz.y;
PSD.ReplyThreadBtn.opacity = 0;
PSD.OutOfSyncBtn.opacity = 0;
PSD.RecentComments.opacity = 0;
PSD.NewCommentIcon.opacity = 0;

PSD.CommentsThread.superView = PSD.RightPanel;
PSD.CommentsThread.x = PSD.RightPanel.width + 10;
PSD.CommentsThread.y = PSD.RelatedViz.y - 15;
PSD.ThreadBackBtn.opacity = 0;
PSD.CommentsThread.opacity = 0;

PSD.PostDeleteDiag.superView = PSD.CommentsThread;
PSD.PostDeleteDiag.x = PSD.ThreadPost1.maxX + 10;
PSD.PostDeleteDiag.y = PSD.ThreadScroll.y -10;

PSD.NewCommentThread.superView = PSD.RightPanel;
PSD.NewCommentThread.x = PSD.RightPanel.width + 10;
PSD.NewCommentThread.y = PSD.RelatedViz.y - 15;
PSD.NewThreadBackBtn.opacity = 0;
PSD.NewCommentThread.opacity = 0;

PSD.CommentPreview.superView = PSD.RecentComments;
PSD.CommentPreview.x = 0;
PSD.CommentPreview.y = PSD.RecentComments.maxY;
PSD.CommentPreview.opacity = 0;

// Set up Preview Mode
PSD.PreviewMode.y = PSD.PreviewMode.y - PSD.PreviewMode.height;

// Set Up Chart Area
PSD.ChartArea.clip = true;
PSD.NewViz.opacity = 0;
var PrevMode = false;

// Set up Filter Popup
PSD.FilterPop.opacity = 0;

// Animation Library
RecentCommentsIn = function() {
  PSD.RecentComments.animate({
    properties: {x: 2, opacity: 1},
    time: 200,
    curve: "ease-in-out"
  });
  PSD.CommentPreview.animate({
    origin: "100% 50%",
    properties: {x: 0 - PSD.CommentPreview.width, y: 130, scale: 0.5},
    curve: animationCurve
  });
}

RecentCommentsOut = function() {
  PSD.RecentComments.animate({
    properties: {x: PSD.RecentComments.width + 10, opacity: 0},
    time: 200,
    curve: "ease-in-out"
  });
  PSD.CommentPreview.animate({
    origin: "100% 50%",
    properties: {x: PSD.RecentComments.x, y: 500, scale: 1},
    curve: animationCurve
  });
}

CommentsThreadIn = function() {
  PSD.CommentsThread.animate({
    properties: {x: 2, y: PSD.CommentsThread.y + 3, opacity: 1},
    time: 200,
    curve: "ease-in-out"
  });
}

CommentsThreadOut = function() {
  PSD.CommentsThread.animate({
    properties: {x: PSD.CommentsThread.width + 10, opacity: 0},
    time: 200,
    curve: "ease-in-out"
  });
}

NewCommentThreadIn = function() {
  PSD.NewCommentThread.animate({
    properties: {x: 2, y: PSD.NewCommentThread.y + 3, opacity: 1},
    time: 200,
    curve: "ease-in-out"
  });
}

NewCommentThreadOut = function() {
  PSD.NewCommentThread.animate({
    properties: {x: PSD.NewCommentThread.width + 10, opacity: 0},
    time: 200,
    curve: "ease-in-out"
  });
}

RelatedVizIn = function() {
  PSD.RelatedViz.animate({
    properties: {x: 2, opacity: 1},
    time: 200,
    curve: "ease-in-out"
  });
}

RelatedVizOut = function() {
  PSD.RelatedViz.animate({
    properties: {x: PSD.RelatedViz.width + 10, opacity: 0},
    time: 200,
    curve: "ease-in-out"
  });
}

FilterPopIn = function() {
  PSD.FilterPop.animate({
    properties: {opacity: 1},
    time: 100,
    curve: "ease-in"
  });
}

FilterPopOut = function() {
  PSD.FilterPop.animate({
    properties: {opacity: 0},
    time: 100,
    curve: "ease-out"
  });
}

// Animate Right Panel Switch
PSD.CommentTab.on("click", function(e) {
  e.preventDefault();
  PSD.RPanelSelect.animate({
    properties: {x: PSD.CommentTab.x},
    curve: "spring(1000,30,500)"
  });
  PSD.CommentTabCurrent.opacity = 1;
  PSD.CommentTabCurrent.index = 6;
  PSD.DiscoveryTabCurrent.opacity = 0;
  PSD.DiscoveryTabCurrent.index = 2; 
  RecentCommentsIn();
  RelatedVizOut();
});

PSD.DiscoveryTab.on("click", function(e) {
  e.preventDefault();
  PSD.RPanelSelect.animate({
    properties: {x: PSD.DiscoveryTab.x},
    curve: "spring(1000,30,500)"
  });
  PSD.CommentTabCurrent.opacity = 0;
  PSD.CommentTabCurrent.index = 2;
  PSD.DiscoveryTabCurrent.opacity = 1;
  PSD.DiscoveryTabCurrent.index = 6;
  RecentCommentsOut();
  RelatedVizIn();
});

// Preview Out of Sync Viz
PSD.RecComm2.on("mouseenter", function() {
  PSD.CommentPreview.animate({
    origin: "100% 50%",
    properties: {scale: 1, opacity: 1},
    curve: animationCurve
  });
  if (PrevMode == false) {
    PSD.NewViz.x = PSD.DefViz.x;
    PSD.NewViz.maxY = PSD.DefViz.maxY;
  }
});

PSD.RecComm2.on("mouseleave", function() {
  PSD.CommentPreview.animate({
    origin: "100% 50%",
    properties: {scale: 0.5, opacity: 0},
    curve: animationCurve
  });
  if (PrevMode == false) {
    PSD.NewViz.y = 648;
  }
});


// Transit to New Viz
PSD.RecComm2.on("click", function(e) {
  e.preventDefault();
  PrevMode = true;
  PSD.NewViz.animate({
    properties: {opacity: 1},
    time: 200,
    curve: "ease-in"
  });
  animation1 = PSD.DefViz.animate({
    properties: {opacity: 0},
    time: 200,
    curve: "ease-out"
  });
  animation1.on("end", function() {
    PSD.DefViz.y = 648;
  });
  PSD.PreviewMode.animate({
    properties: {y: PSD.FilterBar.maxY - 2},
    curve: animationCurve
  });
  RecentCommentsOut();
  CommentsThreadIn();
});

// Back to Default Viz
PSD.ReturnDefVizBtn.on("mouseenter", function() {
  if (PrevMode) {
    PSD.DefViz.maxY = PSD.NewViz.maxY;
  }
});

PSD.ReturnDefVizBtn.on("mouseleave", function() {
  if (PrevMode) {
    PSD.DefViz.y = 648;
  }
});

PSD.ReturnDefVizBtn.on("click", function(e) {
  e.preventDefault();
  PrevMode = false;
  PSD.DefViz.animate({
    properties: {opacity: 1},
    time: 200,
    curve: "ease-in"
  });
  animation1 = PSD.NewViz.animate({
    properties: {opacity: 0},
    time: 200,
    curve: "ease-out"
  });
  animation1.on("end", function() {
    PSD.NewViz.y = 648;
  });
  PSD.PreviewMode.animate({
    properties: {y: PSD.PreviewMode.y - PSD.PreviewMode.height},
    curve: animationCurve
  });
  RecentCommentsIn();
  CommentsThreadOut();
});

PSD.ThreadBackBtn.on("mouseenter", function() {
  if (PrevMode) {
    PSD.DefViz.maxY = PSD.NewViz.maxY;
  }
});

PSD.ThreadBackBtn.on("mouseleave", function() {
  if (PrevMode) {
    PSD.DefViz.y = 648;
  }
});

PSD.ThreadBackBtn.on("click", function(e) {
  e.preventDefault();
  PrevMode = false;
  PSD.DefViz.animate({
    properties: {opacity: 1},
    time: 200,
    curve: "ease-in"
  });
  animation1 = PSD.NewViz.animate({
    properties: {opacity: 0},
    time: 200,
    curve: "ease-out"
  });
  animation1.on("end", function() {
    PSD.NewViz.y = 648;
  });
  PSD.PreviewMode.animate({
    properties: {y: PSD.PreviewMode.y - PSD.PreviewMode.height},
    curve: animationCurve
  });
  RecentCommentsIn();
  CommentsThreadOut();
});

// Delete Post
PSD.ThreadPostDelBtn.on("click", function(e) {
  e.preventDefault();
  PSD.PostDeleteDiag.animate({
    properties: {x: 0},
    curve: animationCurve
  });
});

MoveCommentsUp = function(target) {
  target.animate({
    properties: {y: target.y - target.height},
    curve: "spring(400,30,200)"
  });
}

PSD.ConfirmDelete.on("click", function(e) {
  PSD.ThreadPost1.animate({
    properties: {x: PSD.NewThreadPost1.width + 30},
    curve: "spring(750,30,375)"
  });
  PSD.PostDeleteDiag.animate({
    properties: {x: PSD.PostDeleteDiag.width + 10},
    curve: animationCurve
  });
  MoveCommentsUp(PSD.ThreadPost2);
  MoveCommentsUp(PSD.ThreadPost3);
  MoveCommentsUp(PSD.ThreadPost4);
  MoveCommentsUp(PSD.ThreadPost5);
});


// Datapoint Comment Button
FilterPopOn = false;

PSD.DPCommentBtn.on("click", function(e) {
  e.preventDefault();
  FilterPopIn();
  FilterPopOn = true;
});

// Add New Comment
PSD["comment-btn"].on("click", function(e) {
  e.preventDefault();
  FilterPopOut();
  PSD.RPanelSelect.animate({
    properties: {x: PSD.CommentTab.x},
    curve: "spring(1000,30,500)"
  });
  PSD.CommentTabCurrent.opacity = 1;
  PSD.CommentTabCurrent.index = 6;
  PSD.DiscoveryTabCurrent.opacity = 0;
  PSD.DiscoveryTabCurrent.index = 2; 
  NewCommentThreadIn();
  RecentCommentsOut();
  CommentsThreadOut();
  RelatedVizOut();
  PSD.NewThreadPost1.x = PSD.NewThreadPost1.width + 30;
});

PSD.NewCommentPostBtn.on("click", function(e) {
  PSD.NewThreadPost1.animate({
    properties: {x: 10},
    curve: "spring(750,30,375)"
  });
  PSD.NewCommentIcon.animate({
    properties: {opacity: 1},
    time: 100,
    curve: "ease-in"
  });
});

PSD.NewThreadBackBtn.on("click", function(e) {
  NewCommentThreadOut();
  RecentCommentsIn();
});







