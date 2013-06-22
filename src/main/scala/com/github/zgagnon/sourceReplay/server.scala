package com.github.zgagnon.sourceReplay

import com.sun.jersey.spi.container.servlet.ServletContainer
import javax.ws.rs.{Path, GET}
import org.eclipse.jetty.server.{ServerConnector, Server}
import org.eclipse.jetty.servlet.{ServletContextHandler, ServletHolder}


/**
 * @author Zoe Gagnon
 * @version ${project.version}
 * @since
 */


object WebRunner {
  def main(args: Array[String]) {

    val port = Option(System.getenv("PORT")) map { s => Integer.parseInt(s)}
    val server = new Server(port.getOrElse(8080) )

    val connector = new ServerConnector(server)
    server.addConnector(connector)

    val handler = new ServletContextHandler(ServletContextHandler.SESSIONS)
    handler.setContextPath("/")

    val holder = new ServletHolder(classOf[ServletContainer])
    holder.setInitParameter("com.sun.jersey.config.property.packages", "com.github.zgagnon.sourceReplay")

    handler.addServlet(holder, "/*")

    server.setHandler(handler)


    server.start()
    server.join()
//    val holder:ServletHolder = new ServletHolder(classOf[ServletContainer])
//    holder.setInitParameter("com.sun.jersey.config.property.resourceConfigClass",
//                            "com.sun.jersey.api.core.PackagesResourceConfig")
//    holder.setInitParameter("com.sun.jersey.config.property.packages",
//                            "com.github.zgagnon.sourceReplay")
//    val context = new ServletContextHandler(server, "/", ServletContextHandler.SESSIONS)
//    context.addServlet(holder, "/*")
//    server.start()
//    server.join()
  }
}

@Path("/helloworld")
class TestResource {
  @GET
  def hello() = {
    "HELLO!!"
  }
}
