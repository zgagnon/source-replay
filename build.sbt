import com.typesafe.sbt.SbtStartScript

name := "Source Replay"

version := "1.0"

scalaVersion := "2.10.1"

libraryDependencies += "org.eclipse.jetty" % "jetty-server" % "/:

libraryDependencies += "org.eclipse.jetty" % "jetty-servlet" % "9.0.2.v20130417"

libraryDependencies += "org.eclipse.jetty" % "jetty-server" % "9.0.2.v20130417" % "test"

libraryDependencies += "com.sun.jersey" % "jersey-server" % "1.2"

libraryDependencies += "com.sun.jersey" % "jersey-json" % "1.2"

seq(SbtStartScript.startScriptForJarSettings: _*)