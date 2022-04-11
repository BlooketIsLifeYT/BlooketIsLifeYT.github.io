$(document).ready(function() {
document.getElementById("#youtubeChannelText").addEventListener("click", function() { window.location.href = "https://www.youtube.com/c/BlooketIsLife" });
document.getElementById("#aboutMeButton").addEventListener("click", function() { document.getElementById("#mainStuff").style.display = "none"; document.getElementById("#aboutMeStuff").style.display = "block"; });
document.getElementById("#aboutMeBackButton").addEventListener("click", function() { document.getElementById("#mainStuff").style.display = "block"; document.getElementById("#aboutMeStuff").style.display = "none"; });
document.getElementById("#blooketButton").addEventListener("click", function() { window.location.href = "https://blooket.com" });
document.getElementById("#quickzButton").addEventListener("click", function() { window.location.href = "https://quickz.org" });
document.getElementById("#discordServerButton").addEventListener("click", function() { window.location.href = "https://discord.gg/DN5f7HPGrF" });
});