package Test;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class Test {


    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver","E:\\Pruebas Testing QA\\QA Testing Java\\SeleniumTestProject\\src\\main\\resources\\ChromeDriver\\chromedriver.exe");

        //Inicializando browser
        WebDriver driver = new ChromeDriver();
        //Open Facebook
        driver.get("http//www.facebook.com");
        //Maximizar Browser
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));

    }
}
