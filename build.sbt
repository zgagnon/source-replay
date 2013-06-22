import com.typesafe.sbt.SbtStartScript

name := "Source Replay"

version := "1.0"

scalaVersion := "2.10.1"

libraryDependencies += "org.eclipse.jetty" % "jetty-server" % "9.0.3.v20130506"

libraryDependencies += "org.eclipse.jetty" % "jetty-servlet" % "9.0.3.v20130506"

libraryDependencies += "org.eclipse.jetty" % "jetty-server" % "9.0.3.v20130506" % "test"

libraryDependencies += "com.sun.jersey" % "jersey-server" % "1.2"

libraryDependencies += "com.sun.jersey" % "jersey-json" % "1.2"

seq(SbtStartScript.startScriptForClassesSettings: _*)