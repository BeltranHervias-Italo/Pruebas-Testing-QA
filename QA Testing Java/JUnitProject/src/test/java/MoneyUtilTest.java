import org.junit.Assert;
import org.junit.Test;

public class MoneyUtilTest { //Aqui correrian todos los casos de prueba

    @Test //Esto ayuda a que pueda ejecutarse un caso de prueba
    public void moneyTest1() {
        String money = MoneyUtil.format(1000);
        Assert.assertEquals("$1000.0", money); //1er Parametro: Lo que esperamos
                                                       //2do Parametro: Lo que tenemos
    }
    @Test
    public void moneyTest2() {
        String money = MoneyUtil.format(1000);
        Assert.assertEquals("$1000.00", money);
    }
    @Test
    public void negativeMoneyTest() {
        String money = MoneyUtil.format(-1000);
        Assert.assertEquals("-$1000.00", money);
    }
    @Test
    public void euroMoneyTest() {
        String money = MoneyUtil.format(-1000, "€");
        Assert.assertEquals("-€1000.00", money);
    }
    @Test(expected = IllegalArgumentException.class)
    public void notNullExceptionMoneyTest() {
        MoneyUtil.format(-1000, null);
    }
}