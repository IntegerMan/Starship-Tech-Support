/* tslint:disable:no-inferrable-types */
import {Component, OnInit, ViewChild} from '@angular/core';
import {GameStateStore} from './Reducers/GameStateStore';
import {Observable} from 'rxjs';
import {SidebarComponent, TreeViewComponent} from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'ssit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  constructor(private state: GameStateStore) {
  }

  @ViewChild('sidebarTreeviewInstance', undefined)
  public sidebarTreeviewInstance: SidebarComponent;
  @ViewChild('treeviewInstance', undefined)
  public treeviewInstance: TreeViewComponent;
  public width: string = '200px';
  public enableDock: boolean = true;
  public dockSize: string = '44px';
  public mediaQuery: string = ('(min-width: 600px)');
  public target: string = '.main-content';

  public data = [
    {
      nodeId: '00', nodeText: 'Status', iconCss: 'icon-thumbs-up-alt icon',
    },
    {
      nodeId: '01', nodeText: 'Crew', iconCss: 'icon-microchip icon',
    },
    {
      nodeId: '02', nodeText: 'Work Items', iconCss: 'icon-docs icon',
    },
    {
      nodeId: '03', nodeText: 'Schedule', iconCss: 'icon-docs icon',
    },
    {
      nodeId: '04', nodeText: 'Policies', iconCss: 'icon-bookmark-empty icon',
    },
    {
      nodeId: '05', nodeText: 'Systems', iconCss: 'icon-microchip icon',
    },
    {
      nodeId: '06', nodeText: 'Knowledge Base', iconCss: 'icon-help-circled icon',
    },
  ];
  public field = { dataSource: this.data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'iconCss' };

  public time$: Observable<string>;

  public onCreated(args: any) {
    this.sidebarTreeviewInstance.element.style.visibility = '';
  }

  openClick() {
    this.sidebarTreeviewInstance.toggle();
    if (this.sidebarTreeviewInstance.isOpen) {
      const style = document.getElementsByClassName('e-text-content');
      let length: number = style.length - 1;
      while (length >= 0) {
        const htmlEl: HTMLElement = style[length] as HTMLElement;
        htmlEl.style.padding = '0 0 0 24px';
        length--;
      }
      this.treeviewInstance.expandAll();
    } else {
      const style: any = document.getElementsByClassName('e-text-content');
      let length: number = style.length - 1;
      while (length >= 0) {
        style[length].style.padding = '0 0 0 8px';
        length--;
      }
      this.treeviewInstance.collapseAll();
    }
  }

  ngOnInit(): void {
    this.time$ = this.state.select(this.state.getTime);
  }

  onNodeClicked(node: any) {
    console.debug('Node click', node);
  }
}
