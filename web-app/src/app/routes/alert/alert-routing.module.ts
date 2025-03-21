/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertCenterComponent } from './alert-center/alert-center.component';
import { AlertGroupConvergeComponent } from './alert-group/alert-group-converge.component';
import { AlertInhibitComponent } from './alert-inhibit/alert-inhibit.component';
import { AlertIntegrationComponent } from './alert-integration/alert-integration.component';
import { AlertNoticeComponent } from './alert-notice/alert-notice.component';
import { AlertSettingComponent } from './alert-setting/alert-setting.component';
import { AlertSilenceComponent } from './alert-silence/alert-silence.component';

const routes: Routes = [
  { path: '', component: AlertCenterComponent },
  { path: 'center', component: AlertCenterComponent },
  { path: 'setting', component: AlertSettingComponent },
  { path: 'notice', component: AlertNoticeComponent },
  { path: 'silence', component: AlertSilenceComponent },
  { path: 'group', component: AlertGroupConvergeComponent },
  { path: 'inhibit', component: AlertInhibitComponent },
  { path: 'integration/:source', component: AlertIntegrationComponent, data: { titleI18n: 'menu.alert.integration' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule {}
