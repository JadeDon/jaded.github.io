// Renders the "Academic Footprints" world map on the Footprints page.
// Requires the global `d3` (v7) and `topojson` (topojson-client v3) scripts
// to be loaded before this file. See _pages/footprints.md for usage and
// README notes below for how to add a newly visited country.
(function () {
  var container = document.getElementById("footprints-map");
  if (!container || typeof d3 === "undefined" || typeof topojson === "undefined") {
    return;
  }

  var worldUrl = container.dataset.world;
  var footprintsUrl = container.dataset.footprints;

  var width = container.clientWidth || 800;
  var height = Math.round(width * 0.52);

  var svg = d3
    .select(container)
    .append("svg")
    .attr("class", "footprints-svg")
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMidYMid meet");

  var tooltip = d3.select(container).append("div").attr("class", "footprints-tooltip");

  var projection = d3.geoNaturalEarth1().fitSize([width, height], { type: "Sphere" });
  var path = d3.geoPath(projection);

  // Display-name overrides: the base map's name is replaced with the
  // preferred label everywhere (tooltip text and footprints.json lookups).
  var nameOverrides = {
    Taiwan: "Taiwan Region"
  };

  Promise.all([d3.json(worldUrl), d3.json(footprintsUrl)]).then(function (results) {
    var world = results[0];
    var footprints = results[1];
    var countries = topojson.feature(world, world.objects.countries).features;

    countries.forEach(function (d) {
      d.properties.name = nameOverrides[d.properties.name] || d.properties.name;
    });

    svg
      .selectAll("path.country")
      .data(countries)
      .join("path")
      .attr("class", function (d) {
        var entry = footprints[d.properties.name];
        return entry && entry.visited ? "country visited" : "country";
      })
      .attr("d", path)
      .on("mouseenter", function (event, d) {
        var entry = footprints[d.properties.name];
        d3.select(this).classed("hovered", true);
        var timeLines = entry && entry.time ? (Array.isArray(entry.time) ? entry.time : [entry.time]) : [];
        tooltip
          .classed("show", true)
          .html(
            "<strong>" +
              d.properties.name +
              "</strong>" +
              timeLines.map(function (line) { return "<br>" + line; }).join("")
          );
      })
      .on("mousemove", function (event) {
        var point = d3.pointer(event, container);
        tooltip.style("left", point[0] + 14 + "px").style("top", point[1] + 10 + "px");
      })
      .on("mouseleave", function () {
        d3.select(this).classed("hovered", false);
        tooltip.classed("show", false);
      });
  });
})();
