$(document).ready(function() 
{
	var _viewportWidth = $(window).width(),
	_viewportHeight = $(window).height();

  function resizeViewport()
  {
    _viewportWidth = $(window).width(),
    _viewportHeight = $(window).height();
  }

  $(window).resize(function(e) 
  {
    resizeViewport(); 
  });
  resizeViewport();

  var Helpers = function()
  {
    function validateEmail(email)
    {
      var re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
      return re.test(email);
    }
    function validatePostcode(p) 
    { 
      var postcodeRegEx = /^(GIR 0AA)|(((A[BL]|B[ABDHLNRSTX]?|C[ABFHMORTVW]|D[ADEGHLNTY]|E[HNX]?|F[KY]|G[LUY]?|H[ADGPRSUX]|I[GMPV]|JE|K[ATWY]|L[ADELNSU]?|M[EKL]?|N[EGNPRW]?|O[LX]|P[AEHLOR]|R[GHM]|S[AEGKLMNOPRSTY]?|T[ADFNQRSW]|UB|W[ADFNRSV]|YO|ZE)[1-9]?[0-9]|((E|N|NW|SE|SW|W)1|EC[1-4]|WC[12])[A-HJKMNPR-Y]|(SW|W)([2-9]|[1-9][0-9])|EC[1-9][0-9]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i;

      return postcodeRegEx.test(p); 
    }

    function isNumber(n)
    {
      var re = /^(?:\d+\.?\d*|\.\d+)$/;
      return re.test(n);
    }
    return {
      validateEmail: validateEmail,
      validatePostcode: validatePostcode,
      isNumber: isNumber
    }
  }();

});

