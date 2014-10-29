/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.demo.main;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.content.pm.Signature;
import android.os.Bundle;
import android.util.Base64;
import android.util.Log;

import org.apache.cordova.*;

public class demologinfb extends CordovaActivity 
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        
        
        // Add code to print out the key hash
        try {
             PackageInfo info = getPackageManager().getPackageInfo("com.demo.main", 
             PackageManager.GET_SIGNATURES);
             for (Signature signature : info.signatures) {
             MessageDigest md = MessageDigest.getInstance("SHA");
             md.update(signature.toByteArray());
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
             Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
           }
        } catch (NameNotFoundException e) {

        } catch (NoSuchAlgorithmException e) {

        }

        super.init();
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html");
    }
}

