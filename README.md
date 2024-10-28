-------------------------------------------------------------------------------
First run
-------------------------------------------------------------------------------
- execute
  - npm run firstTime  
- in android/variables.gradle set: 
	  compileSdkVersion = 34
    targetSdkVersion = 34
- in android\gradle\wrapper\gradle-wrapper.properties set:
  distributionUrl=https\://services.gradle.org/distributions/gradle-8.3-all.zip
- in android\app\src\main\AndroidManifest.xml add to manifest tag the attribute:
  xmlns:tools="http://schemas.android.com/tools"
- in android\app\src\main\AndroidManifest.xml add into the application tag:
  <service android:name="com.google.android.gms.metadata.ModuleDependencies"
    android:enabled="false"
    android:exported="false"
    tools:ignore="MissingClass">
    <intent-filter>
        <action android:name="com.google.android.gms.metadata.MODULE_DEPENDENCIES" />
    </intent-filter>
    <meta-data android:name="photopicker_activity:0:required" android:value="" />
  </service>
- in android\app\src\main\AndroidManifest.xml add into the manifest tag:
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />  
- execute
  - npm run start 
