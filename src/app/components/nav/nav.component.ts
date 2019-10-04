import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    (function($) {
      $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
        if (
          !$(this)
            .next()
            .hasClass("show")
        ) {
          $(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass("show");

        $(this)
          .parents("li.nav-item.dropdown.show")
          .on("hidden.bs.dropdown", function(e) {
            $(".dropdown-submenu .show").removeClass("show");
          });

        return false;
      });
    });
  }
}
