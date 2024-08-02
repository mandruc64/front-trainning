import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appRoleManagement]'
})
export class RoleManagementDirective implements OnInit {
  @Input()
  validRole: any;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
      if (localStorage.getItem('userRole') !== this.validRole) {
        this.el.nativeElement.style.display = 'none';
      }
    }
}
