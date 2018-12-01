rm ./platforms/android/app/build/outputs/apk/debug/app-debug.apk

ionic cordova build android --prod 

rm ./www/assets/exciting-bicol.apk

mv ./platforms/android/app/build/outputs/apk/debug/app-debug.apk ./www/assets/exciting-bicol.apk
